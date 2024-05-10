/*import React from 'react';
import EventNew from './EventNew';

export function EventReadOnly() {
  return (
      <EventNew readOnly={true} /> 
  );
}*/

/*import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointments';

//const currentDate = new Date().toISOString().split('T')[0];
const currentDate = '2023-10-01'

export default () => (
  <Paper>
        <Scheduler
          data={appointments}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
  </Paper>
);*/

import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { owners, priorityData } from './Room';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Resources,
  AppointmentTooltip,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointments';

export default class EventReadOnly extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
     currentDate : new Date().toISOString().split('T')[0],
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
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  render() {
    const { data, resources, currentDate } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <Resources
            data={resources}
          />
          <AppointmentTooltip
          showCloseButton
          />
        </Scheduler>
      </Paper>
    );
  }
}





