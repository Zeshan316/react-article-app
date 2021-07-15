import { articles } from "../../dummy-data/data.js";
import { SORT_ARTICLES, MOST_LIKED, MOST_RECENT } from "../actions/article";


const initialState = {
	articles: articles
};


export default function articleReducer(state = initialState, action){
	const {type, payload} = action; // object destructring
	
	switch(type){
		case MOST_LIKED:
		{

			const updateArticles = sortArticlesByUpvotes(state.articles);
			return {
				...state,
				articles: [...updateArticles]
			};
		}
		break;
		case MOST_RECENT:
		{
			const updateArticles = sortArticlesByUDate(state.articles);
			return {
				...state,
				articles: [...updateArticles]
			};
		}
		break;
		default:

			const updateArticles = sortArticlesByUpvotes(state.articles);
			return {
				...state,
				articles: [...updateArticles]
			};
	}
}

const sortArticlesByUpvotes = (articles) => {
	return articles.sort((a, b) => b.upVotes - a.upVotes);
};

const sortArticlesByUDate = (articles) => {
	return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
};