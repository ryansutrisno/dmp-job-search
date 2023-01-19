import React from 'react';
import Typography from '@material-ui/core/Typography';

const Label = ({children, color, size, weight, align, italic, style}) => {
  return (
    <Typography
      color="textPrimary"
      style={{
        color,
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        lineHeight: 1.5,
        fontStyle: italic ? 'italic' : null,
        ...style,
      }}
    >
      {children}
    </Typography>
  );
};

export default Label;
