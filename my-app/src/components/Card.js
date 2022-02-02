// const todoTitle = "Coca Cola";
// const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facilis totam eligendi, eius amet voluptatibus adipisci iusto eos illo eaque fugiat repellat sapiente, molestias inventore dolor perferendis reiciendis ipsa consequuntur!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear();


function Card(props){
  const {titleText, descText} = props;
  return  <div className='flexing'>
            <div className='card'>
              <h3 className='cardTitle'>{titleText}</h3>
              <p className='cardDesc'>{descText}</p>
              <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
            </div>
          </div>
}


export default Card;