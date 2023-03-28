// * Lesson2-styles Example from lecture notes

// * variant with inline styles

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };
// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };


// export const Alert = ({ variant, children }) => {
//   return (
//     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//       {children}
//     </p>
//   );
// };

// * variant with vanilla css

// import "./Alert.css";


// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];
//   if (outlined) classNames.push("is-outlined");
//   if (elevated) classNames.push("is-elevated");
//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// * variant with clsx lib

// import clsx from "clsx";
// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// * variant with Alert.module.css

// Синтаксис імпорту CSS-модуля
// import clsx from "clsx";
// import css from "./Alert.module.css";
// // Отримуємо об'єкт відповідності імен класів
// console.log(css); // { alert: "Alert_alert_ax7yz" }

// export const Alert = ({variant, children }) => {
//   // Звертаємось до властивості об'єкта на ім'я класу з файлу модуля
//   return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };

// * variant via composes
import clsx from "clsx";
import css from "./Alert.module.css";
export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
