import React from 'react'
import ToolTipTrigger from '../../../../../../components/shared/ToolTipTriger/ToolTipTrigger'

function Step2() {
  return (
    <main className='step-container'>

        <div className="heading">
      <h1>Présentez Votre Hôtel</h1>
      <p>La première impression est toujours la plus importante. Présentez votre hôtel de manière séduisante pour attirer et rassurer vos futurs clients. Fournissez des informations précises pour faciliter leur expérience de réservation.</p>
        </div>

      <div className="form">
        <div className="form-group">
        <label htmlFor="website">Nom del'hôtel  
        <ToolTipTrigger tooltipText="Indiquer le nom de votre établissement" /> 
        </label>
        <input type="url" id="website" name="website" />
      </div>
        <div className="form-group">
        <label htmlFor="website">Site internet de l'hôtel:</label>
        <input type="url" id="website" name="website" />
      </div>

     <div className="form-flex">


      <div className="form-group">
        <label htmlFor="email">Email de l'hôtel:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="address">Adresse de l'hôtel:</label>
        <input type="text" id="address" name="address" />
      </div>
     </div>

      <div className="form-flex">
      <div className="form-group">
        <label htmlFor="phone">Numéro de téléphone de l'hôtel:</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Second numéro de téléphone de l'hôtel:</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      </div>
   

      <div className="form-group">
    <label htmlFor="website">langue parlée
    <ToolTipTrigger tooltipText="Langues parler par le staff de l'hôtel. Separer les differentes langues par un point virgule." /> 
    </label>
    <textarea type="url" id="website" name="website" placeholder=' exemple :francais ; Anglais ; Japonais'/>
  </div>
 
 <div className="form-flex">
 <div className="form-group">
    <label htmlFor="website">Prix de la chambre la moins cher</label>
    <input type="number" id="website" name="website" />
 </div>
 <div className="form-group">
    <label htmlFor="website">Prix de la chambre la moins cher</label>
    <input type="number" id="website" name="website" />
 </div>
 </div>
      <div className="form-group">
        <button className='btn btn-ok'>Valider</button>
      </div>
      </div>
    </main>
  )
}

export default Step2