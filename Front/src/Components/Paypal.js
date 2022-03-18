import React from "react";

class Paypal extends React.Component {
  componentDidMount() {
    window.paypal
      .Buttons({
        // Set up the transaction
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "0.01"
                }
              }
            ]
          });
        },

        // Finalize the transaction
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert(
              "Transaction completed by " + details.payer.name.given_name + "!"
            );
          });
        }
      })
      .render("#paypal-button-container");
  }

  render() {
    return (
      <div>
        <div id="paypal-button-container" />
      </div>
    );
  }
}

export default Paypal;
