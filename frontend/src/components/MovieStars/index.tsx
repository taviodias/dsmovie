import "./styles.css"
import { ReactComponent as StarFull } from "assets/img/starFull.svg"
import { ReactComponent as StarHalf } from "assets/img/starHalf.svg"
import { ReactComponent as StarEmpty } from "assets/img/starEmpty.svg"

type Props = {
    score: number
}

type StarProsps={
    fill: number
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0.2 && diff < 0.7) {
        fills[integerPart] = 0.5;
    }
    if(diff > 0.7)
        fills[integerPart] = 1;

    return fills;
}

function Star({fill}:StarProsps){
    if(fill === 0)
        return<StarEmpty/>
    else if(fill === 0.5)
        return<StarHalf/>
    else
        return<StarFull/>
}

function MovieStars({ score }: Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
}
export default MovieStars;