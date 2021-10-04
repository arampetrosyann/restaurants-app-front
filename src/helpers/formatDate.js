const getDateFormat = (dateObj = new Date(), format = "") => {
    let formatString = format.trim();

    const year = dateObj.getFullYear();
    const digitYear = year % 100;
    const date = dateObj.getDate();
    const dayName = dateObj.toLocaleString("default", { weekday: "long" });
    const shortDayName = dateObj.toLocaleString("default", { weekday: "short" });
    const dateOrdinal = `${date}st`;
    const month = dateObj.getMonth() + 1;
    const monthName = dateObj.toLocaleString("default", { month: "long" });
    const shortMonthName = dateObj.toLocaleString("default", { month: "short" });
    const hours = dateObj.getHours();
    const normHours = hours < 10 ? `0${hours}` : String(hours);

    const minutes = dateObj.getMinutes();
    const normMinutes = minutes < 10 ? `0${minutes}` : String(minutes);

    const seconds = dateObj.getSeconds();
    const normSeconds = seconds < 10 ? `0${seconds}` : String(seconds);

    const timestamp = dateObj.getTime();
    const timeCode = hours >= 12 ? "PM" : "AM";
    const weekDay = dateObj.getDay() + 1;

    const formatOptions = {
        YY: year, // Full year (2021)
        YD: digitYear, // 2 digit year (21)
        MN: monthName, // Month name (April)
        MSN: shortMonthName, // Month name in short form (Apr)
        MM: month, // Month number (1...12)
        WD: dayName, // Day name (Sunday)
        WSD: shortDayName, // Day name in short form (Sun)
        DD: date, // Day of month (1...31)
        DO: dateOrdinal, // Day of month with ordinal (24st)
        XX: timestamp, // Timestamp
        HH: normHours, // Hours
        MI: normMinutes, // Minutes
        SS: normSeconds, // Seconds
        AA: timeCode, // Post or ante meridiem - (AM|PM)
        EE: weekDay, // Day of week - (1...7)
    };

    for (const key in formatOptions) {
        if (Object.hasOwnProperty.call(formatOptions, key)) {
            const value = formatOptions[key];

            formatString = formatString.replace(key, value);
        }
    }

    return formatString;
};

/**
 *
 * Function to format date:
 *
 * @function
 *
 * @param {(string|number)} code
 *
 * @param {string} format
 *
 * @return {string} Formatted date
 *
 * @example
 *
 * formatDate(1623958149455, "MSN DD, YY HH:MI AA");
 *
 * returns "Jun 17, 2021 11:13 AM"
 *
 * @example
 *
 * formatDate(1623958149455, "HH:MI:SS");
 *
 * returns "19:29:09"
 *
 */

const formatDate = (code = "", format = "DD | MSN | YY") => {
    let dateCode = code;

    if (!dateCode) {
        dateCode = Date();
    }

    const date = new Date(dateCode);

    const result = getDateFormat(date, format, locale);

    return result;
};

export default formatDate;
