import { useState } from "react";
import { TextFieldProps } from "./FormFields/TextFields/TextField.types";
import TextField from "./FormFields/TextFields/TextField";
import { FormProps } from "./Form.types";
import Form from "./Form";
import {
  MultiSelectFieldProps,
  SelectFieldOption,
  SingleSelectFieldProps,
} from "./FormFields/selectFields/SelectFields.types";
import SingleSelectField from "./FormFields/selectFields/SingleSelectField";
import MultiSelectField from "./FormFields/selectFields/MultiSelectField";
import { ArtisanUXProvider } from "../Provider";
import {FloatFieldProps, IntegerFieldProps} from "./FormFields/numberFields/NumberField.types";
import IntegerField from "./FormFields/numberFields/IntegerField";
import FloatField from "./FormFields/numberFields/FloatField";
import {DateFieldProps, DateRangeFieldProps, DateRangeValue} from './FormFields/dateFields/DateField.types';
import DateField from './FormFields/dateFields/DateField';
import DateRangeField from "./FormFields/dateFields/DateRangeField";
import * as moment from "moment";
import {MultiSelectBoxFieldProps, SingleSelectBoxFieldProps} from "./FormFields/selectBoxFields/SelectBoxFields.types";
import MultiSelectBoxField from "./FormFields/selectBoxFields/MultiSelectBoxField";
import SingleSelectBoxField from "./FormFields/selectBoxFields/SingleSelectBoxField";
import {RepeaterProps, RepeaterUnitFieldProps} from "./repeaters/Repeater.types";
import Repeater from "./repeaters/Repeater";

const meta = {
  title: "ArtisanUX/Forms",
  argTypes: {},
};

export default meta;

const BasicTextField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_text_field",
    value: value,
    onChange: setValue,
    label: "Basic Text Field",
  };

  return <TextField {...textFieldProps} />;
};

const BasicMultiLineField = () => {
  const [value, setValue] = useState<string>("");

  const textFieldProps: TextFieldProps = {
    id: "basic_multiline_field",
    value: value,
    onChange: setValue,
    label: "Basic Multiline Field",
    multiline: true,
  };

  return <TextField {...textFieldProps} />;
};

export const TextFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Text Fields",
        subtitle: "Additional information about this section",
        fields: [<BasicTextField />, <BasicMultiLineField />],
      }
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};

const BasicSingleSelectField = () => {
  const [value, setValue] = useState<string>(null);

  const options: Array<SelectFieldOption> = [
    {
      label: "Blue",
      key: "blue",
      groupName: "Blues",
    },
    {
      label: "Red",
      subText: "Hex: #FF0000",
      key: "red",
      groupName: "Reds",
    },
    {
      label: "Sky Blue",
      key: "sky_blue",
      groupName: "Blues",
    },
  ];

  const fieldProps: SingleSelectFieldProps = {
    options: options,
    currentValue: value,
    onChange: setValue,
    label: "Pick a color...",
    helpText: "This is the help text for a single select field",
  };

  return <SingleSelectField {...fieldProps} />;
};

const BasicMultiSelectField = () => {
  const [values, setValues] = useState<Array<string>>([]);

  const options: Array<SelectFieldOption> = [
    {
      label: "Blue",
      key: "blue",
      groupName: "Blues",
    },
    {
      label: "Red",
      key: "red",
      groupName: "Reds",
    },
    {
      label: "Sky Blue",
      key: "sky_blue",
    },
  ];

  const fieldProps: MultiSelectFieldProps = {
    options: options,
    currentValues: values,
    onChange: setValues,
    label: "Pick some colors...",
    helpText: "This is the help text for a multi select field",
  };

  return <MultiSelectField {...fieldProps} />;
};

export const SelectFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Select Fields",
        subtitle: "This field contains our select fields",
        fields: [<BasicSingleSelectField />, <BasicMultiSelectField />],
      }
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};

const BasicMultiSelectBoxField = () => {
  const [value, setValue] = useState<Array<string>>([]);

  const props: MultiSelectBoxFieldProps = {
    id: "multi_select_box_field",
    options: [
      { label: "Red", key: "red" },
      { label: "Blue", key: "blue" },
      { label: "Grey", key: "grey" },
      { label: "Yellow", key: "yellow" },
      { label: "Green", key: "green" },
      { label: "Purple", key: "purple" },
      { label: "Gold", key: "gold" },
      { label: "White", key: "white" }
    ],
    label: "Multiple selection field",
    helpText: "Square checkboxes will indicate multiple options can be selected. Pick as many colors as you want...",
    values: value,
    onChange: setValue
  }

  return <MultiSelectBoxField {...props} />;
}

const BasicSingleSelectBoxField = () => {
  const [value, setValue] = useState<string>(null);

  const props: SingleSelectBoxFieldProps = {
    id: "single_select_box_field",
    options: [
      { label: "Red", key: "red" },
      { label: "Blue", key: "blue" },
      { label: "Grey", key: "grey" },
      { label: "Yellow", key: "yellow" },
      { label: "Green", key: "green" },
      { label: "Purple", key: "purple" },
      { label: "Gold", key: "gold" },
      { label: "White", key: "white" }
    ],
    label: "Single selection field",
    helpText: "Round checkboxes will indicate only one option can be selected. Pick a color...",
    value: value,
    onChange: setValue
  }

  return <SingleSelectBoxField {...props} />;
}

export const SelectBoxFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Select Box Fields",
        fields: [<BasicMultiSelectBoxField />, <BasicSingleSelectBoxField />],
      }
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};

const BasicIntegerField = () => {
  const [value, setValue] = useState<number>(null);

  const props: IntegerFieldProps = {
    id: "basic_integer_field",
    label: "Enter integer...",
    value: value,
    onChange: setValue,
  };

  return <IntegerField {...props} />;
};

const BasicFloatField = () => {
  const [value, setValue] = useState<number>(null);

  const props: IntegerFieldProps = {
    id: "basic_float_field",
    label: "Enter float...",
    value: value,
    onChange: setValue,
  };

  return <FloatField {...props} />;
};

export const NumberFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Number Fields",
        fields: [<BasicIntegerField />, <BasicFloatField />],
      }
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};

const BasicDateField = () => {
  const [value, setValue] = useState<string>(null);

  const props: DateFieldProps = {
    id: "basic_date_field",
    label: "Enter a date...",
    value: value,
    onChange: setValue,
    helpText: Boolean(value) && moment(value).format('MMM D YYYY')
  };

  return <DateField {...props} />;
};

const BasicDateRangeField = () => {
  const [value, setValue] = useState<DateRangeValue>({ startDate: null, endDate: null });

  const props: DateRangeFieldProps = {
    id: "basic_date_field",
    value: value,
    onChange: setValue,
    autoAdjustInvalidDates: true,
    labels: {
      startDateLabel: "Starting on...",
      endDateLabel: "Ending on..."
    },
    helpTexts: {
      startDateHelpText: value.startDate && moment(value.startDate).format('MMM D YYYY'),
      endDateHelpText: value.endDate && moment(value.endDate).format('MMM D YYYY')
    }
  };

  return <DateRangeField {...props} />;
}

export const DateFields = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Date Fields",
        fields: [<BasicDateField />, <BasicDateRangeField />]
      },
    ],
  };

  return (
    <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
      <Form {...formProps} />
    </ArtisanUXProvider>
  );
};


interface InventoryItem {
  unitPrice: number;
  quantity: number;
  name: string;
}

const BasicRepeaterField = () => {
  const [values, setValues] = useState<Array<InventoryItem>>([]);

  const quantityField = (props: RepeaterUnitFieldProps<InventoryItem>) => {
    const onQuantityChange = (quantity: number) => {
      props.onValueChange({...props.value, quantity: quantity});
    }

    const fieldProps: IntegerFieldProps = {
      id: `quantity`,
      value: props.value.quantity,
      onChange: onQuantityChange
    }

    return <IntegerField {...fieldProps} />
  }

  const unitPriceField = (props: RepeaterUnitFieldProps<InventoryItem>) => {
    const onUnitPriceChange = (price: number) => {
      props.onValueChange({...props.value, unitPrice: price});
    }

    const fieldProps: FloatFieldProps = {
      id: `unit_price`,
      value: props.value.unitPrice,
      onChange: onUnitPriceChange
    }

    return <FloatField {...fieldProps} />
  }

  const unitNameField = (props: RepeaterUnitFieldProps<InventoryItem>) => {
    const onNameChange = (name: string) => {
      props.onValueChange({...props.value, name: name});
    }

    const fieldProps: TextFieldProps = {
      id: `name`,
      value: props.value.name,
      onChange: onNameChange
    };

    return <TextField {...fieldProps} />;
  }

  const repeaterProps: RepeaterProps<InventoryItem> = {
    id: "inventory_item_list",
    values: values,
    blankValue: {
      quantity: 0,
      unitPrice: 0,
      name: "",
    },
    onValuesChange: setValues,
    fields: [
      {
        colspan: 4,
        fieldName: "quantity",
        Component: quantityField
      },
      {
        colspan: 4,
        fieldName: "unitPrice",
        Component: unitPriceField
      },
      {
        colspan: 4,
        fieldName: "unitName",
        Component: unitNameField
      }
    ]
  }

  return <Repeater {...repeaterProps} />;
}

export const Repeaters = () => {
  const formProps: FormProps = {
    sections: [
      {
        title: "Repeaters",
        fields: [<BasicRepeaterField />]
      },
    ],
  };

  return (
      <ArtisanUXProvider primaryColor={{ main: "#9e2d0b" }}>
        <Form {...formProps} />
      </ArtisanUXProvider>
  );
}