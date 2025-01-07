/* Importando a biblioteca 'mitt' para uso de EventBus.
OBS -> Necessário instalar a dependencia 'mitt' antes de importar (npm install mitt) */
import mitt from 'mitt';

/* Instanciando os métodos da biblioteca 'mitt' para o Objeto 'eventBus' */
const eventBus = mitt();

/* Exportando de forma padrão.
OBS -> Sempre que for usar o 'eventBus' para lidar com 'eventos personalizados' 
ele deve ser importado no Componente local ou de forma Global */
export default eventBus 