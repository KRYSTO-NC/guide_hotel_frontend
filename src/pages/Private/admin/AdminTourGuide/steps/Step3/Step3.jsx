import React from 'react'
import ToolTipTrigger from '../../../../../../components/shared/ToolTipTriger/ToolTipTrigger'

function Step3() {
  return (
    <main className='step-container'>

    <div className="heading">
  <h1>Les Menus de votre guide</h1>
  <p>Ce sont les menus de naviguation de votre guide pour chaque menu vous pourrez afficher les sous catégories de votre choix</p>
    </div>

  <div className="form">
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Votre Arivée
        <ToolTipTrigger tooltipText="Informations sur l'arrivée à l'hôtel, les horaires, etc." />

    </label>
</div>
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Messagerie
        <ToolTipTrigger tooltipText="Service de messagerie, vos clients pourront envoyer un message a la recéption ou reserver dans votre restaurant. Et vous pourrez envoyer un messages a tout vos client ou choisir un client specifique" />

    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Services sur place
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
      Méteo
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
       Tourisme
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Loisirs aux environs
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Commodités a proximités
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Manger aux environs
    </label>
</div>
<div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
       Calendrier des événements
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
       Urgences
    </label>
</div>
  
  <div className="form-group checkbox-group">
    <label>
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Votre départ
    </label>
</div>
  




  </div>
</main>
  )
}

export default Step3