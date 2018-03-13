import React from 'react';
import { Calendar } from 'antd';
import 'antd/lib/calendar/style/css'

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Datecard extends React.Component {
    render() {
      return (
      <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>)
    }
  }

  export default Datecard