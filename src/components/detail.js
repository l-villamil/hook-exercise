import { useParams } from "react-router-dom";
export default function Detail() {
  
 const params = useParams();
 const foto = decodeURIComponent(params.mascotaFoto);
 return (
   <div>
     <h1>{params.mascotaNombre}</h1>
     <img src={foto} alt="Foto de la mascota" />
     <h2>{params.mascotaRaza}</h2>
   </div>
 );
}