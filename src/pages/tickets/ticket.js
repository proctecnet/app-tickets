import React, { useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TicketContext } from '../../context/TicketContext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { BlockUI } from 'primereact/blockui';
        


const Tickets = () => {
const ticketsContext = useContext(TicketContext);

  useEffect(() => {
    ticketsContext.fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <Button label="Analizar" onClick={() => ticketsContext.instaceNewPhishing()} />
      <Dialog visible={ticketsContext.displayDialog} onHide={() => ticketsContext.setDisplayDialog(false)}>
        <h3>Analizar web</h3>
        <div className="p-grid p-fluid">
          <div className="p-field p-col-12">
            <label htmlFor="url">Posible URL suplantadora</label>
            <InputText id="url" name="url" value={ticketsContext.phishingForm.url} onChange={ticketsContext.handleInputChange} />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="marcaAfectada">Marca Afectada</label>
            <InputText id="marcaAfectada" name="marca" value={ticketsContext.phishingForm.sitioAfectado.marca} onChange={ticketsContext.handleNestedInputChange} />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="correoProveedor">URL real</label>
            <InputText id="correoProveedor" name="URL" value={ticketsContext.phishingForm.sitioAfectado.URL} onChange={ticketsContext.handleNestedInputChange} />
          </div>
        </div>
        <Button label="Analizar" onClick={ticketsContext.createTicket} />
      </Dialog>
      <DataTable value={ticketsContext.tickets}>
        <Column field="id" header="ID" />
        <Column field="marcaAfectada" header="Marca afectada" />
        <Column field="url" header="URL" />
        <Column field="estado" header="Estado" />
        <Column field="fechaCreacion" header="Fecha de Creación" />
      </DataTable>
    </div>
  );
};

export default Tickets;
