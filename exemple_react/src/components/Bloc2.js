import { useParams } from 'react-router-dom';

function Bloc2(){

    let params = useParams();

    return (
        <div className="card">Bloc 2 {params.id}</div>
    )
}
export default Bloc2;