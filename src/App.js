import Content from './Content.json';

const Scp = Content.map((content) => {return(

  

  <div className="text-bg-primary p-5 mb-3 rounded "> 
    <h1 className="text-white"> <b>Item : </b> {content.item}</h1>
    <h1 className="text-white"> <b>Class : </b> {content.class}</h1>
    <p className="text-white"> <img src={content.image} class="img-fluid" alt="" ></img> </p>
    <p className="text-white"><b>Containment : </b>{content.containment}</p>
    <p className="text-white"> <b>Description : </b>{content.description}</p>
    <p className="text-white"> <b>Additional notes :  </b>{content.additionalNotes}</p>
    <br></br>
  </div>
);
}
)


function App() {
  return (

    <div>
      {Scp}
    </div>
  
  );
}

export default App;
