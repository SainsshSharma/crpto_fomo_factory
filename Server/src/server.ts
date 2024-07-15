import http from "http";
import express from "express";
import "./config/logging";
import { loggingHandle } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import { routeNotFound } from "./middleware/routeNotFound";
import {
  coinList,
  SERVER,
  SERVER_HOSTNAME,
  SERVER_PORT,
} from "./config/config";
import "reflect-metadata";
import { defineRoutes } from "./modules/route";
import MainController from "./controller/main";
import mongoose from "mongoose";
import { mongo } from "./config/config";
import { CronJob } from "cron";
import { storeData } from "./helper/fetchApiData";

export const application = express();

export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
  logging.info("----------------------------------------------------------");
  logging.info("intializing API");
  logging.info("----------------------------------------------------------");
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  logging.info("----------------------------------------------------------");
  logging.info("Connect to Mongoose");
  logging.info("----------------------------------------------------------");
  try {
    const connection = await mongoose.connect(mongo.MONGO_CONNECTION);
    logging.log("connected to mongo: ", connection.version);
  } catch (err) {
    logging.info("----------------------------------------------------------");
    logging.info("Unable to connect");
    logging.error(err);
    logging.info("----------------------------------------------------------");
  }

  logging.info("----------------------------------------------------------");
  logging.info("Logging & Configuration");
  logging.info("----------------------------------------------------------");

  application.use(loggingHandle);
  application.use(corsHandler);

  logging.info("----------------------------------------------------------");
  logging.info("Define Controller Routing");
  logging.info("----------------------------------------------------------");
  defineRoutes([MainController], application);

  logging.info("----------------------------------------------------------");
  logging.info("Define Controller Routing");
  logging.info("----------------------------------------------------------");
  application.use(routeNotFound);

  logging.info("----------------------------------------------------------");
  logging.info("Start Server");
  logging.info("----------------------------------------------------------");
  httpServer = http.createServer(application);
  httpServer.listen(SERVER.SERVER_PORT, () => {
    logging.info("----------------------------------------------------------");
    logging.info("SERVER Started: " + SERVER_HOSTNAME + ":" + SERVER_PORT);
    logging.info("----------------------------------------------------------");
  });

  const job = new CronJob(
    "*/15 * * * * *",
    async () => {
      for (const [key, value] of Object.entries(coinList)) {
        storeData(value);
      }
      console.log("data saved Success");
    },
    null,
    true
  );
};

export const Shutdown = (callback: any) => {
  httpServer && httpServer.close(callback);
};

Main();
