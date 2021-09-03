import {useParams} from 'react-router-dom';

export function JobDetails() {
    let { id } = useParams();
    return (
        <div>{id}</div>
    )
}