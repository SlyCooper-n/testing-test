import { AccomplishmentType } from "@core/types";
import { Cake, CircleNotch } from "phosphor-react";
import { FormEvent, useState } from "react";

export const Accomplishments = () => {
  const [accomplishment, setAccomplishment] = useState<AccomplishmentType>({
    title: "",
    body: "",
    valid: true,
  });
  const [formSent, setFormSent] = useState(false);
  const [fakeLoading, setFakeLoading] = useState(false);

  function handleFormChange(
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) {
    switch (e.currentTarget.name) {
      case "title":
        setAccomplishment({
          ...accomplishment,
          title: e.currentTarget.value,
        });
        break;

      case "body":
        setAccomplishment({
          ...accomplishment,
          body: e.currentTarget.value,
        });
        break;

      case "valid":
        setAccomplishment({
          ...accomplishment,
          valid: !accomplishment.valid,
        });
        break;
    }
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    setFakeLoading(true);
    setTimeout(() => {
      setFormSent(true);
      setFakeLoading(false);
    }, 2000);

    setAccomplishment({
      title: "",
      body: "",
      valid: true,
    });
  }

  if (formSent) {
    return (
      <section className="w-full sm:w-1/2 h-full mx-auto pt-12 flex flex-col items-center gap-12">
        <h2 className="text-3xl font-semibold">
          Accomplishment sent successfully!
        </h2>

        <Cake size={192} weight="duotone" className="text-info" />

        <button
          type="button"
          onClick={() => setFormSent(false)}
          className="btn w-full"
        >
          Go back
        </button>
      </section>
    );
  }

  return (
    <section className="w-full sm:w-1/2 h-full mx-auto pt-12 flex flex-col items-center">
      <h2 className="mb-12 text-3xl font-semibold">Accomplishments</h2>

      <form className="form-control w-full gap-4" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          aria-label="Title"
          placeholder="Title"
          required
          value={accomplishment.title}
          onChange={handleFormChange}
          className="input bg-white"
        />

        <textarea
          name="body"
          aria-label="My accomplishment..."
          placeholder="My accomplishment..."
          required
          value={accomplishment.body}
          onChange={handleFormChange}
          className="input h-32 bg-white resize-none"
        />

        <label className="label w-fit justify-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="valid"
            checked={accomplishment.valid}
            onChange={handleFormChange}
            className="checkbox checkbox-secondary"
          />
          <span className="label-text">This accomplishment is valid</span>
        </label>

        <button type="submit" className="btn btn-primary">
          Submit Accomplishment
        </button>
      </form>

      {fakeLoading && (
        <CircleNotch size={64} className="mt-4 text-info animate-spin" />
      )}
    </section>
  );
};
