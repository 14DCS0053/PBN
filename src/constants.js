export const NOTIFICATIONS_PAGE_SIZE = 20;
export const REQUIRED_ACTIONS_PAGE_SIZE = 20;
export const DEFAULT_DATE_TIME_FORMAT = "MM/DD/YYYY hh:mm A";
export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";


export const actionFilterMap = {
  APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"],color:'red' },
  FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"],color:'blue' },
  APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"],color:'green' },
  PAYMENT: { text: "Payment", filters: ["PR"],color:'yellow' },
  REVIEW: { text: "Review", filters: ["URR"],color:'pink' },
  FEEDBACK: { text: "Feedback", filters: ["FR"],color:'orange' }
};

export const filterActivityOptions = [
  {
    name: "APPT_REQUEST",
    value: "APPT_REQUEST",
    label: "Appt Request",
    color: "red",
    filters:actionFilterMap.APPT_REQUEST.filters
  },
  { name: "FORM", value: "FORM", label: "Form",
  filters:actionFilterMap.FORM.filters

 },
  {
    name: "APPOINTMENT",
    value: "APPOINTMENT",
    label: "Appointment",
    color: "green",
    filters:actionFilterMap.APPOINTMENT.filters
  },
  { name: "PAYMENT", value: "PAYMENT", label: "Payment", color: "yellow",filters:actionFilterMap.PAYMENT.filters },
  { name: "REVIEW", value: "REVIEW", label: "Review", color: "orange",filters:actionFilterMap.REVIEW.filters  },
  { name: "FEEDBACK", value: "FEEDBACK", label: "Feedback", color: "pink",filters:actionFilterMap.FEEDBACK.filters  }
];
export const actionEventTypeMap = {
  UNFAVORABLE_REVIEW_RECEIVED: "URR",
  UNCLASSIFIED_MESSAGE_RECEIVED: "UMR",
  CALLBACK_REQUESTED: "CR",
  FEEDBACK_RECEIVED: "FR",
  APPOINTMENT_REQUESTED: "AR",
  APPOINTMENT_SYNC_FAILED: "ASF",
  APPOINTMENT_CONFLICTED: "AC",
  PAYMENT_RECEIVED: "PR",
  GENERAL_FORM_SUBMISSION_PRACTICE_ALERT: "FWAPS",
  FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE: "FSRS",
  UNKNOWN_PATIENT_FORM_SUBMITTED: "UPFS",
  GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT: "FURAS",
  GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE: "FRDS"
};

export const actionStatus = {
  PENDING: "pending",
  IGNORED: "ignored",
  COMPLETED: "completed"
};

export const actionDescriptionMap = {};

export const notificationFilterMap = {
  APPT_REQUEST: { text: "Appt Request", filters: ["CA", "ARA"],color:'red' },
  FORM: { text: "Form", filters: ["FS"],color:'red' },
  APPOINTMENT: { text: "Appointment", filters: ["AC"],color:'red' },
  PAYMENT: { text: "Payment", filters: ["PR"],color:'red' },
  REVIEW: { text: "Review", filters: ["RR"],color:'red' },
  FEEDBACK: { text: "Feedback", filters: [],color:'red' }
};

export const notificationEventTypeMap = {
  REVIEW_RECEIVED: "RR",
  APPOINTMENT_CONFIRMED: "AC",
  APPOINTMENT_REQUEST_ACCEPTED: "ARA",
  CONFLICTED_APPOINTMENT: "CA",
  PAYMENT_RECEIVED: "PR",
  FORM_SUBMITTED: "FS"
};

export const notificationStatus = {
  UNREAD: "unread",
  MARKED_AS_READ: "read"
};

export const notificationDescriptionMap = {};

export const ActionsFilterOPtions = [
  { name: "Pending", value: "pending" },
  { name: "Completed", value: "completed" },
  { name: "Ignored", value: "ignored" },
  { name: "All", value: "all" }
];
export const NotificationsFilterOption = [
  {name:"Unread",value:'unread'},{name:'All',value:'all'}
]
export const TableFilterOption = [
  { name: "Paytype Id", value: "paytype_id" },
  { name: "Provider Id", value: "provider_id" },
  { name: "Employee Type Id", value: "employee_type_id" },
]

export const  BANNER_TITLE = "WELCOME BACK, Chris."
export const  BANNER_DESCRIPTION = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
export const  BANNER_LINK_TEXT = "View Huddle";
export const  BANNER_LINK_ADDRESS ="#";
export const  BANNER_QUICK_LINKS = ["Create Custom Campaign", "Work on My Tasks", "Find revenue Opportunities"]