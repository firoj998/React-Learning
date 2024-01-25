import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
export default function CoreConcepts(){
    return(
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
          title = "Components"
          description = "The Core UI Building Block!"
          image = {componentsImg}
          /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

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
    )
}