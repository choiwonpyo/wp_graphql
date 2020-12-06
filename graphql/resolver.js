import {getMovies} from './db' 
//query 에 대한 행동을 저으이, DB 질의던 말던 네 맘대로.
//playground 는 graphql-yoga 가 제고앻주는... query 테스트용 페이지
const resolver = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating)
    }
}

export default resolver;