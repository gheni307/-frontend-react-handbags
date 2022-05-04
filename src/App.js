import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Product from "./components/Producten/Product";
import Tile from "./components/Tile/Tile";
import afbeelding1 from "./assets/bag_1.png";
import afbeelding2 from "./assets/bag_2.png";
import afbeelding3 from "./assets/bag_3.png";
import afbeelding4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button text="to the collection" />
              <Button text="shop all bags" />
              <Button text="pre-orders" />
          </nav>
          <main>
            <article>
                <Product label="Best seller" afbeelding={afbeelding1} afText="bag_1" text="the handy bag"
                         prijs="€400,-" />
            </article>

              <article>
                  <Product label="Best seller" afbeelding={afbeelding2} afText="bag_2" text="the Stylish bag"
                           prijs="€250,-" />
              </article>

              <article>
                  <Product label="New collection" afbeelding={afbeelding3} afText="bag_3" text="the simple bag"
                           prijs="€300,-" />
              </article>

              <article>
                  <Product label="New collection" afbeelding={afbeelding4} afText="bag_4" text="the trendy bag"
                           prijs="€150,-" />
              </article>

          </main>
          <footer>
              <Tile title="THE BRAND" paragrafen="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Aliquid culpa dolorum
                      enim exepturi, fuga pariatur
                      praesentium quia sepui similipue sunt." paragrafen1="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Aliquid culpa dolorum
                      enim exepturi, fuga pariatur
                      praesentium quia sepui similipue sunt." />
              <Tile afbeelding={brand} afText="brand" />
              <Tile afbeelding={ourStory} afText="our-story" />
              <Tile title="OUR STORY" paragrafen="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Blanditiis eligendi
                      exercitationem illo, labore laboriosam
                      nihil omnis proesentium. Aspernatur
                      cum deleniti excepturi iraque,
                      laboriosam nisi rerum sunt At
                      repellendus tenetur veniam!" />

          </footer>
      </>
  );
}

export default App;