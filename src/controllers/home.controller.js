const getHome = async (_req, res) => {

  return res.status(200).json(
    {
      'artists': [
        {
          'stage_name': 'John Doe',
          'number_of_streams': 100000
        },
        {
          'stage_name': 'Jane Doe',
          'number_of_streams': 50000
        }
      ],
      'musics': [
        {
          'title': 'My Song',
          'number_of_streams': 20000
        },
        {
          'title': 'Your Song',
          'number_of_streams': 15000
        }
      ],
      'albums': [
        {
          'title': 'My Album',
          'number_of_streams': 30000
        },
        {
          'title': 'Your Album',
          'number_of_streams': 25000
        }
      ],
      'streaming_services': [
        {
          'service_name': 'Spotify',
          'revenue': 100000
        },
        {
          'service_name': 'Apple Music',
          'revenue': 50000
        }
      ],
      'streaming_history': {
        'data': [
          {
            'user_id': 1,
            'music_id': 1,
            'timestamp': '2024-01-20T12:00:00Z'
          },
          {
            'user_id': 2,
            'music_id': 2,
            'timestamp': '2024-01-21T09:00:00Z'
          }
        ]
      }
    }
  );
};

module.exports = {
  getHome
};

