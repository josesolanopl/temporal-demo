import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Temporal } from "temporal-polyfill";
import { PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

dayjs.extend(timezone);
dayjs.extend(utc);

function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 py-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
}

function Code({ children }: { children: string | string[] }) {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
}

function App() {
  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold">Timestamp</h2>
        <Code>
          {
            "const dayjsTimestamp = dayjs().valueOf();\nconst temporalTimestamp = Temporal.Now.instant().epochMilliseconds;"
          }
        </Code>
        <p>Day.js: {dayjs().valueOf()}</p>
        <p>Temporal: {Temporal.Now.instant().epochMilliseconds}</p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Now</h2>
        <div>
          <Code>
            {
              "const dayjsNow = dayjs().format()\nconst temporalNow = Temporal.Now.plainDateTimeISO().toString();"
            }
          </Code>
        </div>
        <div>
          <p>Dayjs: - {dayjs().format()}</p>
          <p>Temporal: - {Temporal.Now.plainDateTimeISO().toString()}</p>
        </div>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Formatting</h2>
        <Code>
          {
            "const dayjsFormatted = dayjs().format('MMMM D, YYYY h:mm A');\nconst temporalFormatted = Temporal.Now.plainDateTimeISO().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });"
          }
        </Code>
        <p>Day.js: {dayjs().format("MMMM D, YYYY h:mm A")}</p>
        <p>
          Temporal:{" "}
          {Temporal.Now.plainDateTimeISO().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Parsing</h2>
        <Code>
          {
            "const dayjsParsed = dayjs('2023-10-10T10:00:00').format();\nconst temporalParsed = Temporal.PlainDateTime.from('2023-10-10T10:00:00').toString();"
          }
        </Code>
        <p>Day.js: {dayjs("2023-10-10T10:00:00").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.PlainDateTime.from("2023-10-10T10:00:00").toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">
          Parsing UTC Date and Converting to Specific Timezone
        </h2>
        <Code>
          {
            "const dayjsParsedUTC = dayjs.utc('2023-10-10T10:00:00Z').tz('America/Los_Angeles').format();\nconst temporalParsedUTC = Temporal.ZonedDateTime.from('2023-10-10T10:00:00Z'.replace('Z', '+00:00[UTC]').withTimeZone('America/Los_Angeles').toString();"
          }
        </Code>
        <p>
          Day.js:{" "}
          {dayjs.utc("2023-10-10T10:00:00Z").tz("America/Los_Angeles").format()}
        </p>
        <p>
          Temporal:{" "}
          {Temporal.ZonedDateTime.from(
            "2023-10-10T10:00:00Z".replace("Z", "+00:00[UTC]")
          )
            .withTimeZone("America/Los_Angeles")
            .toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Simple Date</h2>
        <Code>
          {
            "const dayjsSimpleDate = dayjs('2023-10-10').format();\nconst temporalSimpleDate = Temporal.PlainDate.from('2023-10-10').toString();"
          }
        </Code>
        <p>Day.js: {dayjs("2023-10-10").format()}</p>
        <p>Temporal: {Temporal.PlainDate.from("2023-10-10").toString()}</p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Year and Month</h2>
        <Code>
          {
            "const dayjsYearMonth = dayjs('2023-10').format();\nconst temporalYearMonth = Temporal.PlainYearMonth.from('2023-10').toString();"
          }
        </Code>
        <p>Day.js: {dayjs("2023-10").format()}</p>
        <p>Temporal: {Temporal.PlainYearMonth.from("2023-10").toString()}</p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Month and Day</h2>
        <Code>
          {
            "const dayjsMonthDay = dayjs('10-10', 'MM-DD').format();\nconst temporalMonthDay = Temporal.PlainMonthDay.from('10-10').toString();"
          }
        </Code>
        <p>Day.js: {dayjs("10-10", "MM-DD").format()}</p>
        <p>Temporal: {Temporal.PlainMonthDay.from("10-10").toString()}</p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Add 1 Day</h2>
        <Code>
          {
            "const dayjsAddOneDay = dayjs().add(1, 'day').format();\nconst temporalAddOneDay = Temporal.Now.plainDateTimeISO().add({ days: 1 }).toString();"
          }
        </Code>
        <p>Day.js: {dayjs().add(1, "day").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.Now.plainDateTimeISO().add({ days: 1 }).toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Subtract 1 Month</h2>
        <Code>
          {
            "const dayjsSubtractOneMonth = dayjs().subtract(1, 'month').format();\nconst temporalSubtractOneMonth = Temporal.Now.plainDateTimeISO().subtract({ months: 1 }).toString();"
          }
        </Code>
        <p>Day.js: {dayjs().subtract(1, "month").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.Now.plainDateTimeISO().subtract({ months: 1 }).toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Start of Year</h2>
        <Code>
          {
            "const dayjsStartOfYear = dayjs().startOf('year').format();\nconst temporalStartOfYear = Temporal.PlainDate.from(Temporal.Now.plainDateISO()).with({ month: 1, day: 1 }).toString();"
          }
        </Code>
        <p>Day.js: {dayjs().startOf("year").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.PlainDate.from(Temporal.Now.plainDateISO())
            .with({ month: 1, day: 1 })
            .toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">End of Year</h2>
        <Code>
          {
            "const dayjsEndOfYear = dayjs().endOf('year').format();\nconst temporalEndOfYear = Temporal.PlainDate.from(Temporal.Now.plainDateISO()).with({ month: 12, day: 31 }).toString();"
          }
        </Code>
        <p>Day.js: {dayjs().endOf("year").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.PlainDate.from(Temporal.Now.plainDateISO())
            .with({ month: 12, day: 31 })
            .toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Timezone Conversion</h2>
        <Code>
          {
            "const dayjsTimezone = dayjs().tz('America/New_York').format();\nconst temporalTimezone = Temporal.Now.zonedDateTimeISO('America/New_York').toString();"
          }
        </Code>
        <p>Day.js: {dayjs().tz("America/New_York").format()}</p>
        <p>
          Temporal:{" "}
          {Temporal.Now.zonedDateTimeISO("America/New_York").toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Current Time in UTC</h2>
        <Code>
          {
            "const dayjsUTC = dayjs().utc().format();\nconst temporalUTC = Temporal.Now.zonedDateTimeISO('UTC').toString();"
          }
        </Code>
        <p>Day.js: {dayjs().utc().format()}</p>
        <p>Temporal: {Temporal.Now.zonedDateTimeISO("UTC").toString()}</p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Daylight Saving Time</h2>
        <Code>
          {
            "const dayjsDSTStart = dayjs.tz('2023-03-12T02:00:00', 'America/New_York').format();\nconst dayjsDSTEnd = dayjs.tz('2023-11-05T02:00:00', 'America/New_York').format();\nconst temporalDSTStart = Temporal.ZonedDateTime.from({ year: 2023, month: 3, day: 12, hour: 2, timeZone: 'America/New_York' }).toString();\nconst temporalDSTEnd = Temporal.ZonedDateTime.from({ year: 2023, month: 11, day: 5, hour: 2, timeZone: 'America/New_York' }).toString();"
          }
        </Code>
        <p>
          Day.js DST Start:{" "}
          {dayjs.tz("2023-03-12T02:00:00", "America/New_York").format()}
        </p>
        <p>
          Day.js DST End:{" "}
          {dayjs.tz("2023-11-05T02:00:00", "America/New_York").format()}
        </p>
        <p>
          Temporal DST Start:{" "}
          {Temporal.ZonedDateTime.from({
            year: 2023,
            month: 3,
            day: 12,
            hour: 2,
            timeZone: "America/New_York",
          }).toString()}
        </p>
        <p>
          Temporal DST End:{" "}
          {Temporal.ZonedDateTime.from({
            year: 2023,
            month: 11,
            day: 5,
            hour: 2,
            timeZone: "America/New_York",
          }).toString()}
        </p>
      </div>
      <hr className="my-4 border-gray-300"></hr>
      <div>
        <h2 className="text-2xl font-bold">Crossing DST Boundary</h2>
        <Code>
          {
            "const dayjsCrossDSTStart = dayjs.tz('2023-03-12T02:59:59', 'America/New_York').add(1, 'second').format();\nconst dayjsCrossDSTEnd = dayjs.tz('2023-11-05T01:59:59', 'America/New_York').add(1, 'second').format();\nconst temporalCrossDSTStart = Temporal.ZonedDateTime.from({ year: 2023, month: 3, day: 12, hour: 2, minute: 59, second: 59, timeZone: 'America/New_York' }).add({ seconds: 1 }).toString();\nconst temporalCrossDSTEnd = Temporal.ZonedDateTime.from({ year: 2023, month: 11, day: 5, hour: 1, minute: 59, second: 59, timeZone: 'America/New_York' }).add({ seconds: 1 }).toString();"
          }
        </Code>
        <p>
          Day.js Crossing DST Start:{" "}
          {dayjs
            .tz("2023-03-12T02:59:59", "America/New_York")
            .add(1, "second")
            .format()}
        </p>
        <p>
          Day.js Crossing DST End:{" "}
          {dayjs
            .tz("2023-11-05T01:59:59", "America/New_York")
            .add(1, "second")
            .format()}
        </p>
        <p>
          Temporal Crossing DST Start:{" "}
          {Temporal.ZonedDateTime.from({
            year: 2023,
            month: 3,
            day: 12,
            hour: 2,
            minute: 59,
            second: 59,
            timeZone: "America/New_York",
          })
            .add({ seconds: 1 })
            .toString()}
        </p>
        <p>
          Temporal Crossing DST End:{" "}
          {Temporal.ZonedDateTime.from({
            year: 2023,
            month: 11,
            day: 5,
            hour: 1,
            minute: 59,
            second: 59,
            timeZone: "America/New_York",
          })
            .add({ seconds: 1 })
            .toString()}
        </p>
      </div>
    </Container>
  );
}

export default App;
