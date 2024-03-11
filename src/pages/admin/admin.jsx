import { useEffect, useState } from 'react';
import axios from '../../axiosConfig';
import Loading from '../../components/loading/loading';
import PulseLoader from 'react-spinners/PulseLoader';
import Dashboard from '../../components/dashboard/Dashboard';
import RegisterProducts from '../../components/dashboard/registerProducts';
import GlobalLayout from '../../layouts/GlobalLayout';

function Admin() {
  const [alimentos, setAlimentos] = useState([]);
  const [showItens, setShowItens] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  useEffect(() => {
    setLoading2(true)
    axios.get(`/`).then((response) => {
      setAlimentos(response?.data);
      setLoading(false)
      setLoading2(false);
    }).catch((error) => {
    });
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <GlobalLayout>
      <div style={{ display: "none" }}>
        <br />
        {showItens && alimentos.map((item) => (
          <ul className='aliementos' key={item.ID}>
            <h2 style={{ color: "blue" }}>{item?.NomeDoAlimento?.toUpperCase()}</h2>
            <br />
            <li className='liAliemntos'>{"ID do alimento: " + item.ID}</li>
            <li className='liAliemntos'>{"Nome do alimento: " + item.NomeDoAlimento}</li>
            <li className='liAliemntos'>{"Rotulo: " + item.Rotulo}</li>
            <li className='liAliemntos'>{"Data de adição: " + item.DataDeAdicao}</li>
          </ul>
        ))}
        <h2 onClick={() => setShowItens(!showItens)} style={{ color: "red", marginBottom: "1rem", borderRadius: "8px", cursor: "pointer" }}>{showItens ? "Ocutar" : "Mostrar"}</h2>
        <h1>Itens do banco</h1>
        {loading2 && <PulseLoader color="#65A760" size={15} style={{ textAlign: "center" }} />}
      </div>
      <RegisterProducts />

    </GlobalLayout>
  );
}

export default Admin;