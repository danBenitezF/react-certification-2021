export const mapVideosData = (data) => {
    const filteredVideos = data.filter (video => video.id && video.snippet?.title)
    return filteredVideos.map( video => {
        return {
            id: video.id.videoId || video.id,
            title: video.snippet.title,
            etag: video.etag,
            publishedAt: video.snippet.publishedAt,
            channelId: video.snippet.channelId,
            channelTitle: video.snippet.channelTitle,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.medium,
            statistics: video.statistics,
        };
    });
}
