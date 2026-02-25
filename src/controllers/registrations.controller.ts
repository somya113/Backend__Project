import { insertRegistration, selectAllRegistrations, selectRegistrationsByEventId, deleteRegistrationById } from "../repository/registration.repo";

export const createRegistration = async (req, res) => {
  try {
    const { eventId, name, email, studentNo } = req.body;

    if (!eventId || !name || !email || !studentNo) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [reg] = await insertRegistration({ eventId, name, email, studentNo });
    res.status(201).json(reg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not create registration" });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const regs = await selectAllRegistrations();
    res.json(regs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch registrations" });
  }
};

export const getRegistrationsByEventId = async (req, res) => {
  const eventId = Number(req.params.eventId);

  if (isNaN(eventId)) {
    return res.status(400).json({ error: "Invalid event id" });
  }

  try {
    const regs = await selectRegistrationsByEventId(eventId);
    res.json(regs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch registrations" });
  }
};

export const deleteRegistration = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const [reg] = await deleteRegistrationById(id);

    if (!reg) {
      return res.status(404).json({ error: "Registration not found" });
    }

    res.json({ message: "Registration deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not delete registration" });
  }
};
