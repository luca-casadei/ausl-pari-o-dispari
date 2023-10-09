export default function UserPage() {
  return (
    <section className="m-6">
      <h1 className="mb-6 text-lg text-red-600">Registrazione utente cucina</h1>
      <form>
        <div className="mb-6 grow">
          <label htmlFor="cdfsField">Codice fiscale:</label>
          <input required id="cdfsField" className="ml-6" type="text"></input>
        </div>
        <p className="columns-3 gap-20">
          <div className="flex flex-col">
            <label htmlFor="nameField">Nome:</label>
            <input required id="nameField" type="text"></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="surnameField">Cognome:</label>
            <input required id="surnameField" type="text"></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthDateField">Data di nascita:</label>
            <input id="birthDateField" type="date"></input>
          </div>
        </p>
      </form>
    </section>
  );
}
