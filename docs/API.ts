/**
 * @Attrs
 * 
 * allowClear boolean
 * styles React.CSSProperties
 * className string
 * placeholder string
 * disabled boolean
 * type string
 * value string
 * defaultValue string
 * maxLength number
 * minLength number
 * 
 * showSearch boolean
 * showCount boolean
 * showLength boolean
 * 
 * suffix string | React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[]
 * icon string | React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[]
 * 
 * status string // 'error' | 'success' | 'warning'
 * errorMessage string | React.ReactNode | React.ReactNode[] | string[]
 * 
 * // labels and search
 * label React.ReactNode[]
 * autoComplete boolean
 * 
 * loading boolean
 * customLoading React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[]
 * searchLoading boolean
 * 
 * visible boolean
 * visibilityToggle boolean
 * 
 * compact boolean
 * composition boolean // for Chinese
 * 
 * controls boolean | { up: boolean, down: boolean, reset: boolean, render: [React.ReactElement] }
 * step number
 * readOnly boolean
 * parser (value: string) => string
 * min number
 * max number
 * keyboard boolean
 * precision number
 * thousandSeparator boolean
 * decimalSeparator string
 * 
 * linkage boolean
 * linkageOptions { [key: string]: string[] }
 * 
 * separator string
 * 
 * @Addons
 * 
 * @Events
 * onChange function
 * onPressEnter function
 * onBlur function
 * onFocus function
 * 
 * // search
 * onSearch function
 * 
 * // onLabel
 * onLabelClick function
 * onLabelRemove function
 * onLabelAdd function
 * onLabelClear function
 * 
 * onVisibleChange function
 * 
 * onMountLoadData function
 * 
 * onStep function
 * 
 * @Methods
 * 
 * getHistory function
 * getLabels function
 * getValues function
 * getValuesAndLabels function
 * 
 * @Ref
 * getInputElement React.ReactElement
 * getContainerElement React.ReactElement
 * getMode function // 'input' | 'select' | 'search'
 * ...
 */