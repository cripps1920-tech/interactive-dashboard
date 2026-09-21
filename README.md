# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features
## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator
## Weekly Task Goals 
Takes daily goal and multiplies it by the days in the week. It also adds bonus tasks to the total. 
## Imperial/Metric Converter
This tool converts values between Imperial and Metric units. Supported conversions include inch, foot, yard, mile, centimeter, meter, and kilometer.
BEGIN

    INPUT userValue
    INPUT conversionType

    IF conversionType = "inch to centimeter" THEN
        SET result = userValue * 2.54
        OUTPUT result

    ELSE IF conversionType = "foot to centimeter" THEN
        SET result = userValue * 30.48
        OUTPUT result

    ELSE IF conversionType = "yard to meter" THEN
        SET result = userValue * 0.91
        OUTPUT result

    ELSE IF conversionType = "mile to kilometer" THEN
        SET result = userValue * 1.61
        OUTPUT result

    ELSE IF conversionType = "centimeter to inch" THEN
        SET result = userValue * 0.39
        OUTPUT result

    ELSE IF conversionType = "centimeter to foot" THEN
        SET result = userValue * 0.0328
        OUTPUT result

    ELSE IF conversionType = "meter to yard" THEN
        SET result = userValue * 1.09
        OUTPUT result

    ELSE IF conversionType = "kilometer to mile" THEN
        SET result = userValue * 0.62
        OUTPUT result

    ELSE
        OUTPUT "Invalid conversion type selected."

END