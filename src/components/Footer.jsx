import { socialIcons, footerLinks } from "./../store/localdata";
import SectionTitle from "./UI/SectionTitle";

const Footer = () => {
  return (
    <section className="text-center py-12  flex flex-col justify-center items-center">
      <div className="flex gap-x-8 pb-6">
        {socialIcons.map((item) => {
          return (
            <i key={item.id} className="text-3xl">
              {item.icon}
            </i>
          );
        })}
      </div>
      <SectionTitle />
      <p className="text-center py-6">
        support@openui.design
        <br />
        +60 825 876
        <br />
        08:00 - 22:00 - Everyday
      </p>
      <SectionTitle />

      <ul className="flex gap-x-5 py-6">
       {footerLinks.map(link => {
        return (
          <li key={link.id} className="uppercase">{link.link}</li>
        )
       })}
      </ul>

      <p>Copyright© OpenUI All Rights Reserved.</p>
      <p>Developed by Dev. Jude</p>
    </section>
  );
};

export default Footer;
