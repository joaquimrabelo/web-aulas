const { QueryTypes } = require('sequelize');

const Course = require('../models/course');
const connection = require('../database/connection');

class ShowCourseService {
  
  async execute(course_id) {
    const course = await Course.findByPk(course_id);

    const queryVideos = `SELECT videos.* FROM videos 
      INNER JOIN courses_videos ON courses_videos.video_id = videos.id
      WHERE courses_videos.course_id = ${course_id} ORDER BY courses_videos.ordem ASC`;
    
    const videos = await connection.query(queryVideos, {
      type: QueryTypes.SELECT
    });

    const queryFiles = `SELECT files.* FROM files 
      INNER JOIN courses_files ON courses_files.file_id = files.id
      WHERE courses_files.course_id = ${course_id} ORDER BY courses_files.ordem ASC`;
    
    const files = await connection.query(queryFiles, {
      type: QueryTypes.SELECT
    });

    return {course, videos, files};
  }
}

module.exports = ShowCourseService;