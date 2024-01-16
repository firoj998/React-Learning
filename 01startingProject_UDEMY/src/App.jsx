import Header from "./components/Header/Header.jsx";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
 const [selectedTopic , setSelectedTopic] = useState();
  
 function handleSelect(selectedButton)
 {
  setSelectedTopic(selectedButton);  
  // console.log("clicked- selected");
    // console.log(seclectedTopic);
  }

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <main >
        <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {/* <CoreConcept
          title = "Components"
          description = "The Core UI Building Block!"
          image = {componentsImg}
          /> */}

          {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem} />)
          )}
          
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          /> */}

        </ul>
        </section>
      <section id = "examples">
        <h2>Examples</h2>
        <menu>
         <TabButton isSelected={selectedTopic ==='components'} onSelect = {()=> handleSelect('components')} >Components</TabButton>
         <TabButton isSelected={selectedTopic ==='jsx'} onSelect = {()=> handleSelect('jsx')}>JSX</TabButton>
         <TabButton isSelected={selectedTopic ==='props'} onSelect = {()=> handleSelect('props')}>Props</TabButton>
         <TabButton isSelected={selectedTopic ==='state'} onSelect = {()=> handleSelect('state')}>States</TabButton>
        </menu>
        {/* {!selectedTopic?(<p>Please select a topic</p>):( <div id = "tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)} */}

        {/* ----------- OR --------------------- by using &&------  */}

        {!selectedTopic && <p>Please select a topic</p>} 
        
         { selectedTopic && (<div id = "tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)}
       
      </section>
      </main>
    </>
  );
}

export default App;
