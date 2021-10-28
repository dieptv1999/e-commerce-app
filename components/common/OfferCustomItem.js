import React, { useState } from 'react';
import {
  TimePicker, Input, InputNumber, Select, DatePicker,
} from 'antd';
import moment from 'moment';
import { BorderOutlined } from '@ant-design/icons';

const { Option } = Select;

const PriceInput = ({ value = {}, onChange = () => { } }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('weth');

  const triggerChange = (changedValue) => {
    onChange({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (num) => {
    const newNumber = parseInt(num || '0', 10);
    console.log(newNumber);
    if (Number.isNaN(newNumber)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <div className="custom-price-form-item">
      <Select
        value={value.currency || currency}
        style={{
          width: 150,
        }}
        onChange={onCurrencyChange}
      >
        <Option value="weth">
          <span className="currency-select-option">
            <BorderOutlined />
            {' '}
              WETH
          </span>
        </Option>
        <Option value="usdc">
          <span className="currency-select-option">
            <BorderOutlined />
            {' '}
              USDC
          </span>
        </Option>
        <Option value="dai">
          <span className="currency-select-option">
            <BorderOutlined />
            {' '}
              DAI
          </span>
        </Option>
      </Select>
      <InputNumber
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 'calc(100% - 250px)',
        }}
      />
      <Input
        value={`${value.number || number}.00$`}
        style={{
          width: 100,
        }}
        disabled
      />
    </div>
  );
};

const TimeInput = ({ value = {}, onChange = () => { } }) => {
  const [time, setTime] = useState(moment());
  const [currency, setCurrency] = useState('3');

  const triggerChange = (changedValue) => {
    onChange({
      time,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onTimeChange = (time) => {
    if (!('time' in value)) {
      setTime(time);
    }

    triggerChange({
      time,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <div className="custom-price-form-item">
      <Select
        value={value.currency || currency}
        style={{
          width: 120,
        }}
        onChange={onCurrencyChange}
      >
        <Option value="3">In 3 Days</Option>
        <Option value="7">In 7 Days</Option>
        <Option value="30">In a month</Option>
        <Option value="0">Custom Date</Option>
      </Select>
      {value.currency || currency !== '0' ? (
        <TimePicker
          value={value.time || time}
          onChange={onTimeChange}
          style={{
            width: 'calc(100% - 120px)',
          }}
        />
      ) : (
        <DatePicker
          value={value.time || time}
          onChange={onTimeChange}
          showTime
          style={{
            width: 'calc(100% - 120px)',
          }}
        />
      )}

    </div>
  );
};

export { TimeInput, PriceInput };
