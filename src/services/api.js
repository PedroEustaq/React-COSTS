import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a4d798fe1cf82a4a17e606b.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const limparProjetos = async () => {
  try {
    const { data } = await api.get('/projects');
    await Promise.all(data.map((projeto) => api.delete(`/projects/${projeto.id}`)));
    console.log('Projetos limpos com sucesso.');
  } catch (error) {
    console.error('Erro ao limpar projetos:', error);
  }
};

export default api;
