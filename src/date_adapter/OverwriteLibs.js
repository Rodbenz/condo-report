import "dayjs/locale/th";
import Dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import AdapterDayjs from "@date-io/dayjs";
Dayjs.extend(buddhistEra);
//* import thDate from 'dayjs/locale/th'; */
//* import OverwriteAdapterDayjs from "../../../components/date_adapter/OverwriteLibs";  */
//* <LocalizationProvider dateAdapter={OverwriteAdapterDayjs} locale={thDate}>
//* example http://localhost:3000/amn/contman/detail_contract *//

export default class OverwriteAdapterDayjs extends AdapterDayjs {
  constructor({ locale, formats, instance }) {
    super({ locale, formats, instance });
  }
  formatByString = (date, format) => {
      if (format === "YYYY") {
        format = "BBBB";
      }
      return this.dayjs(date).format(format);
   }
}
