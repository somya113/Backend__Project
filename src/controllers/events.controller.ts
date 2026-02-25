import { insertEvent, selectAllEvents, selectEventById, updateEventById, deleteEventById } from "../repository/events.repo";

export const createEvent = async (req, res) => {
  try {
    const { name, startDate, endDate } = req.body;

    if (!name || !startDate || !endDate) {
      return res.status(400).json({ error: "name, startDate and endDate are required" });
    }

    const [event] = await insertEvent(name, startDate, endDate);
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not create event" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await selectAllEvents();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch events" });
  }
};

export const getEventById = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const [event] = await selectEventById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch event" });
  }
};

export const updateEvent = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const [event] = await updateEventById(id, req.body);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not update event" });
  }
};

export const deleteEvent = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const [event] = await deleteEventById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not delete event" });
  }
};
