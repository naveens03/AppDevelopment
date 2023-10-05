import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../redux/FooterSlice";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed left-0 top-0 z-50 bg-opacity-40 bg-black w-screen h-screen flex justify-center">
      <div className="fixed h-[90%] top-[5%]  flex flex-col gap-4 w-[70%] bg-white rounded-lg p-8 overflow-y-scroll text-justify">
        <div className="w-full flex fixed left-[82%]">
          <i
            class="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => dispatch(close({ viewPrivacyPolicy: "false" }))}
          ></i>
        </div>
        <div className="flex justify-center">
          <p className="text-black font-poppins font-semibold text-2xl">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="text-black font-semibold font-poppins text-[1rem]">
            Effective Date: 23/9/2023
          </p>
        </div>
        <div>
          <p className="text-black font-semibold font-poppins text-[1rem]">
          Privacy Policy for Freelancer
          </p>
        </div>
        <div className="px-10 font-medium font-poppins">
          <p className="">
            Welcome to Freelancer. Your privacy and the security of your
            personal information are of utmost importance to us. This Privacy
            Policy is designed to help you understand how we collect, use,
            disclose, and safeguard your personal data when you use our App. By
            accessing or using our App, you acknowledge that you have read,
            understood, and agree to the practices described in this Privacy
            Policy. If you do not agree with these practices, please do not use
            our App.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            1. Information We Collect
          </p>
          <p className="font-semibold font-poppins">
            1.1. Information You Provide
          </p>
          <p className="pl-5 pr-10 font-poppins">
            When you interact with our App, we may collect information that you
            voluntarily provide, which may include:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  Contact Information:
                </td>
                <td>
                  This includes your name, email address, phone number, and
                  other relevant contact details.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Profile Information:
                </td>
                <td>
                  To enhance your user experience, we may collect profile
                  information such as your profile picture, skills, work
                  history, and educational background.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Payment Information:
                </td>
                <td>
                  Payment Information: If you engage in financial transactions
                  on our App, we may collect payment information, such as
                  billing details and bank account information, to facilitate
                  payments and verify your identity.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Communication Data:
                </td>
                <td>
                  We collect data from your interactions with other users, such
                  as messages, chat history, files exchanged, and any content
                  you submit to our platform.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            1.2. Information We Collect Automatically
          </p>
          <p className="pl-5 pr-10 font-poppins">
            In addition to the information you provide, we automatically collect
            certain data when you use our App. This may include:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  Device Information:
                </td>
                <td>
                  We may gather information about your device, such as the type
                  of device, operating system, unique device identifiers, and
                  mobile network information.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">Log Data:</td>
                <td>
                  Our servers automatically record information about your use of
                  the App, including IP addresses, access times, pages viewed,
                  and actions taken within the App.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Location Information:{" "}
                </td>
                <td>
                  If you enable location services on your device, we may collect
                  and process information about your precise or approximate
                  location.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Usage Information:
                </td>
                <td>
                  We track how you interact with our App, including the features
                  you use, the content you view, and your engagement with other
                  users.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            2. How We Use Your Information
          </p>
          <p className="pl-5 pr-10 font-poppins">
            We use the information we collect for various purposes, including:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  Providing and Improving Our App:
                </td>
                <td>
                  We use your data to deliver, maintain, and enhance our
                  services, including matching freelancers with potential
                  clients and optimizing user experiences.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Transaction Processing:
                </td>
                <td>
                  If you engage in financial transactions on our App, we use
                  your payment information to facilitate payments and related
                  transactions.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Communication:
                </td>
                <td>
                  We may contact you to respond to your inquiries, provide
                  support, or deliver important updates related to your use of
                  the App.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Personalization:
                </td>
                <td>
                  We use your data to tailor your experience on the App,
                  providing you with relevant content and suggestions based on
                  your profile and interactions.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">Analytics:</td>
                <td>
                  We analyze usage data to improve our services, troubleshoot
                  technical issues, and enhance the features we offer.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Legal Compliance:
                </td>
                <td>
                  We process your data to meet our legal obligations and respond
                  to legal requests.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            3. How We Share Your Information
          </p>
          <p className="pl-5 pr-10 font-poppins">
            We may share your information with third parties for the following
            purposes:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  User Engagement:
                </td>
                <td>
                  Your information may be shared with other users of the App,
                  such as clients and freelancers, to facilitate your
                  interactions.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Service Providers:
                </td>
                <td>
                  We engage third-party service providers who assist us in
                  operating the App and providing our services. These providers
                  may have access to your data as necessary for their services.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Legal Obligations:
                </td>
                <td>
                  In response to legal requests, we may share your information
                  with law enforcement or government authorities.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Business Transitions:
                </td>
                <td>
                  In the event of a merger, acquisition, or sale of all or part
                  of our assets, your data may be transferred to the acquiring
                  entity.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Protection of Rights:
                </td>
                <td>
                  We may share your data when necessary to protect our rights,
                  privacy, safety, or property, as well as that of our users.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">4. Your Choices</p>
          <p className="pl-5 pr-10 font-poppins">
            We provide you with choices regarding the collection, use, and
            sharing of your data:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  Access and Rectification
                </td>
                <td>
                  You have the right to access the personal data we hold about
                  you. If you believe any information we have about you is
                  inaccurate or incomplete, you may request corrections or
                  updates. You can exercise these rights by contacting us at{" "}
                  <span className="underline text-blue">
                    freelancer@gmail.com
                  </span>
                  .
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Data Deletion
                </td>
                <td>
                  You can request the deletion of your personal data from our
                  systems if you believe we no longer need it for the purposes
                  for which it was collected or if you withdraw your consent.
                  However, please note that certain legal obligations or
                  technical constraints may prevent immediate deletion.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Communication Preferences
                </td>
                <td>
                  You can manage your communication preferences within the App,
                  including opting in or out of marketing communications. You
                  may also adjust notification settings to control the frequency
                  and type of messages you receive from us.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Data Portability
                </td>
                <td>
                  You have the right to receive your personal data in a
                  structured, commonly used, and machine-readable format. If you
                  wish to transfer your data to another service, we will assist
                  you in a reasonable and technically feasible manner.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Account Closure
                </td>
                <td>
                  If you wish to close your account with us, please contact our
                  support team at{" "}
                  <span className="underline text-blue">
                    freelancer@gmail.com
                  </span>
                  . Please note that closing your account may not result in the
                  immediate deletion of all data, as we may need to retain
                  certain information for legal, accounting, or legitimate
                  business purposes.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Consent Withdrawal
                </td>
                <td>
                  Where we rely on your consent as the legal basis for
                  processing your data, you have the right to withdraw your
                  consent at any time. This will not affect the lawfulness of
                  processing before your withdrawal.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Do Not Track Signals
                </td>
                <td>
                  We honor Do Not Track signals sent by your browser. You can
                  also adjust your browser settings to send a "Do Not Track"
                  signal if you prefer not to be tracked across websites.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">Complaints</td>
                <td>
                  If you believe your privacy rights have been violated or you
                  have concerns about how we handle your data, please contact us
                  at{" "}
                  <span className="underline text-blue">
                    freelancer@gmail.com
                  </span>
                  . You also have the right to file a complaint with your local
                  data protection authority.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">5. Security</p>
          <p className="pl-5 pr-10 font-poppins">
            We take the security of your personal information seriously and
            employ a variety of security measures to safeguard your data. These
            include:
          </p>
          <div className="px-10">
            <table className=" border-separate border-spacing-y-3">
              <tr className="">
                <td className="font-semibold w-[11rem] justify-start flex">
                  Data Encryption
                </td>
                <td>
                  All data transmitted between your device and our servers is
                  encrypted using industry-standard encryption protocols (e.g.,
                  TLS/SSL) to ensure that your information remains confidential
                  during transmission.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Access Controls
                </td>
                <td>
                  We restrict access to your personal data to authorized
                  personnel who require access to perform their duties. Access
                  controls are regularly reviewed and updated as necessary.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Regular Security Audits
                </td>
                <td>
                  We conduct regular security audits and assessments of our App
                  and systems to identify and address vulnerabilities. This
                  includes penetration testing and code reviews.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Secure Storage
                </td>
                <td>
                  Your data is stored on secure servers with strict access
                  controls in place. We employ industry best practices to
                  protect data at rest.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Incident Response
                </td>
                <td>
                  In the event of a security breach or data incident, we have
                  established incident response procedures to promptly
                  investigate, mitigate, and notify affected individuals and
                  authorities as required by law.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  User Authentication
                </td>
                <td>
                  We use secure user authentication methods, including strong
                  password policies and, where applicable, multi-factor
                  authentication (MFA), to ensure that only authorized
                  individuals can access your account.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Third-Party Security
                </td>
                <td>
                  We carefully vet and select third-party service providers and
                  partners to ensure that they meet stringent security standards
                  and comply with applicable data protection laws.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Employee Training
                </td>
                <td>
                  Our employees receive ongoing training in data security and
                  privacy practices to ensure they are well-equipped to protect
                  your information.
                </td>
              </tr>
              <tr>
                <td className="font-semibold justify-start flex">
                  Data Retention
                </td>
                <td>
                  We retain your data for the minimum amount of time necessary
                  to fulfill the purposes outlined in this Privacy Policy. When
                  your data is no longer needed, it is securely deleted or
                  anonymized.
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            6. Changes to this Privacy Policy
          </p>
          <p className="pl-5 pr-10 font-poppins">
            We may update this Privacy Policy to reflect changes in our security
            practices or in response to evolving threats and risks. We remain
            committed to continuously improving our security measures to protect
            your data.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">7. Contact Us</p>
          <p className="pl-5 pr-10 font-poppins">
            If you have any questions or concerns about the security of your
            data or our security practices, please do not hesitate to contact us
            at <span className="underline text-blue">freelancer@gmail.com</span>{" "}
            .
          </p>
          <p className="pl-5 pr-10 font-poppins">
            By using our App, you acknowledge and agree to the security measures
            and practices outlined in this Privacy Policy.
          </p>
          <div className="px-10 mt-[1rem]">
            <p>Freelancer</p>
            <p>Kovaipudur</p>
            <p>Coimbatore , 641042</p>
            <p>9876543210</p>
            <p>freelancer@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
