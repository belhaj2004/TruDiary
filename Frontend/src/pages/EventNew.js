
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Toolbar,
  DateNavigator,
  TodayButton,
  DragDropProvider,


} from '@devexpress/dx-react-scheduler-material-ui';

import { owners, priorityData } from './Room';


import { appointments } from './appointments';

const excludedDays = [0, 6];


export default class EventNew extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [

        {
          fieldName: 'Support Group',
          title: 'Support Group',
          instances: priorityData,
        },
        {
          fieldName: 'members',
          title: 'Members',
          instances: owners,
          allowMultiple: true,
        },
      ],
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    // The subsequent lines bind various methods to the current instance of the component, 
    // ensuring that they have access to the correct this context when called.
    // Bind method info: https://www.geeksforgeeks.org/reactjs-bind-method/
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        // Calculate a unique ID for the new appointment
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        // Create a new appointment with the calculated ID and the properties from the 'added' object
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }

      appointments.length = 0; // Clear the existing appointments
      appointments.push(...data); // Push the updated data

      return { data };
    });
  }

  render() {
    const {
      currentDate, data, resources, addedAppointment, appointmentChanges, editingAppointment,
    } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={1045}
        >
          <ViewState
            currentDate={currentDate}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            excludedDays={excludedDays}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog 
          messages={{ confirmDeleteMessage: 'Are you sure you want to delete this event?' }}/>
          <Toolbar />
          <DateNavigator />
          <TodayButton/>
          <Appointments />
          <Resources
            data={resources}
          />
          <DragDropProvider />

          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />


        </Scheduler>
      </Paper>
    );
  }
}








