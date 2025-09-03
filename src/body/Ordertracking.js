function Ordertracking(){
    return(
        <div>
            <div class="tracking-container">
    <h4 style={{textAlign: 'center'}}>Order Tracking</h4>
    <div class="progress-container">
      <div class="step completed">
        <div class="circle"></div>
        <div class="label">Ordered</div>
      </div>
      <div class="step completed">
        <div class="circle"></div>
        <div class="label">Packed</div>
      </div>
      <div class="step active">
        <div class="circle">3</div>
        <div class="label">Shipped</div>
      </div>
      <div class="step">
        <div class="circle">4</div>
        <div class="label">Delivered</div>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Ordertracking
