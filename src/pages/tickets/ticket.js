import React, { useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TicketContext } from '../../context/TicketContext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


const Tickets = () => {
const ticketsContext = useContext(TicketContext);

  useEffect(() => {
    ticketsContext.fetchTickets();
  }, [ticketsContext]);

  return (
    <div>
      <h2>Tickets</h2>
      <Button label="Crear" onClick={() => ticketsContext.instaceNewTicket()} />
      <Dialog visible={ticketsContext.displayDialog} onHide={() => ticketsContext.setDisplayDialog(false)}>
        <h3>Crear Ticket</h3>
        <div className="p-grid p-fluid">
          <div className="p-field p-col-12">
            <label htmlFor="url">URL</label>
            <InputText id="url" name="url" value={ticketsContext.newTicketData.url} onChange={ticketsContext.handleInputChange} />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="marcaAfectada">Marca Afectada</label>
            <InputText id="marcaAfectada" name="marcaAfectada" value={ticketsContext.newTicketData.marcaAfectada} onChange={ticketsContext.handleInputChange} />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="correoProveedor">Correo del Proveedor</label>
            <InputText id="correoProveedor" name="correoProveedor" value={ticketsContext.newTicketData.correoProveedor} onChange={ticketsContext.handleInputChange} />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="correoCliente">Correo del Cliente</label>
            <InputText id="correoCliente" name="correoCliente" value={ticketsContext.newTicketData.correoCliente} onChange={ticketsContext.handleInputChange} />
          </div>
        </div>
        <Button label="Crear" onClick={ticketsContext.createTicket} />
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
