

export const enTofa = (price: number): string => {
    // Add thousand separators
    const withSeparators = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Convert to Persian digits
    const persianDigits: { [key: string]: string } = {
      '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
      '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
    };
    
    return withSeparators.replace(/[0-9]/g, (digit) => persianDigits[digit]);
  };
  
 