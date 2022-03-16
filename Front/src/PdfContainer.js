import React from 'react';
import { useHref } from "react-router-dom";

export default (props) => {
  const bodyRef = React.createRef();

  const createPdf = () => props.createPdf(bodyRef.current);

  const payment = async () => {

      const options = {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          method: 'GET'
      };
      await fetch(`http://localhost:3000/payments`, options).then((res)=>{ location.assign(res.url) });
  }

  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <button className='btn btn-primary' onClick={payment}>Download</button>
      </section>
      <div id="paymentModal"></div>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}