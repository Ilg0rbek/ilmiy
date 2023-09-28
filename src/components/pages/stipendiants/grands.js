import React from "react";
import "./styles.css";

const GrandPage = () => {
  return (
    <div className="container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button grandName collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Prezident stipendiyasi
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ism</th>
                    <th scope="col">Familya</th>
                    <th scope="col">Yo'nalish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Abdumalikov</td>
                    <td>Ilg'orbek</td>
                    <td>Matematika</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button grandName collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Navoiy nomli davlat stipendiyasi
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ism</th>
                    <th scope="col">Familya</th>
                    <th scope="col">Yo'nalish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Abdumalikov</td>
                    <td>Ilg'orbek</td>
                    <td>Matematika</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button grandName collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Islom Каrimоvich nomli davlat stipediyasi
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ism</th>
                    <th scope="col">Familya</th>
                    <th scope="col">Yo'nalish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Abdumalikov</td>
                    <td>Ilg'orbek</td>
                    <td>Matematika</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button grandName collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree1"
              aria-expanded="false"
              aria-controls="collapseThree1"
            >
             Ulug'bek nomli avlat stipendiyasi
            </button>
          </h2>
          <div
            id="collapseThree1"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ism</th>
                    <th scope="col">Familya</th>
                    <th scope="col">Yo'nalish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Abdumalikov</td>
                    <td>Ilg'orbek</td>
                    <td>Matematika</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandPage;
