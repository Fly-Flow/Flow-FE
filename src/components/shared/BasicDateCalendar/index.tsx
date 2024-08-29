import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";

interface BasicDateCalendarProps {
  value: Dayjs | null;
  onDateChange: (date: Dayjs | null) => void;
}

const BasicDateCalendar: React.FC<BasicDateCalendarProps> = ({
  value,
  onDateChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DateCalendar value={value} onChange={(date) => onDateChange(date)} />
    </LocalizationProvider>
  );
};

export default BasicDateCalendar;
