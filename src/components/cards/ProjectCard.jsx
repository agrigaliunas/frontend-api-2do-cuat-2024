import React from "react";
import { ProjectParticipant, ProjectParticipantRounded } from "../ProjectParticipantRounded";
import { Link } from "react-router-dom";

const participantColors = [
  "bg-brandblue"
];

export const ProjectCard = ({ project }) => {
  const participants = project.participantes || [];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="hover:bg-gray-50 border border-1 rounded-lg p-2 min-h-[30vh] shadow-md flex flex-col overflow-hidden gap-5 "
    >
      <div className="text-center">
        <div className="lg:text-2xl text-xl font-semibold">
          {project.nombre}
        </div>
        <div className="lg:text-sm text-sm p-2">{project.descripcion}</div>
      </div>
      <div className="flex flex-col justify-end items-center gap-10">
        <div className="border border-1 rounded-full bg-gray-100 w-full h-fit">
          <div className="text-xl text-center p-2 font-bold">
            Restante: ${project.montoTotalProyecto.toFixed(2)}
          </div>
        </div>
        <div className="flex flex-row gap-3 w-full items-center justify-center">
          {participants.map((p, index) => {
            return (
              <ProjectParticipantRounded
                key={p.id}
                participant={p}
              />
            );
          })}
        </div>
      </div>
    </Link>
  );
};
