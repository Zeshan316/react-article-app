export const MOST_LIKED = "MOST_LIKED";
export const mostLiked = (payload = {}) => {
	return {
		type: MOST_LIKED,
		payload: payload
	}
};
export const MOST_RECENT = "MOST_RECENT";
export const mostRecent = (payload = {}) => {
	return {
		type: MOST_RECENT,
		payload: payload
	}
};
