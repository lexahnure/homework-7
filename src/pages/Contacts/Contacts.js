import './contacts.scss';

const Contacts = () => (
  <>
    <div className="card contacts">
      <h2>Contacts</h2>
      <div className="contacts-info">
        <table>
          <tbody>
            <tr>
              <td>Address</td>
              <td><strong>9 Cours Maréchal Juin, 33000 Bordeaux, France</strong></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td><strong><strong>+33 55 691 87 37</strong></strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Our office location displayed on the map below.</p>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.3177064687018!2d-0.5825241707064206!3d44.83641769869366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527c27500ff71%3A0x56b00d7422f216c6!2zR29kZW7DqGNoZSBCZW5vw650!5e0!3m2!1sru!2sua!4v1549835133854"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  </>
);


export default Contacts;
