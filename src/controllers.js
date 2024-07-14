export function calculateYearMonthFromToday(startDate) {
    const today = new Date();

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
        years--;
        months += 12;
    }

    if (currentDay < startDay) {
        months--;
    }

    if (months < 0) {
        months += 12;
    }

    return `${years} yr ${months} months` ;
}

