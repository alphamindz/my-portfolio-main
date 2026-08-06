import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '', intro: '', description: '', technologies: '',
    liveLink: '', githubLink: '', videoUrl: '', image: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/admin/login');
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    };

    try {
      if (editMode) {
        await axios.put(
          `http://localhost:5000/api/projects/${editId}`,
          projectData,
          { headers: { 'x-auth-token': token } }
        );
        alert('Project updated!');
      } else {
        await axios.post(
          'http://localhost:5000/api/projects',
          projectData,
          { headers: { 'x-auth-token': token } }
        );
        alert('Project added!');
      }
      
      setFormData({
        title: '', intro: '', description: '', technologies: '',
        liveLink: '', githubLink: '', videoUrl: '', image: ''
      });
      setEditMode(false);
      setEditId(null);
      fetchProjects();
    } catch (err) {
      alert('Error: ' + err.response?.data?.message);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      intro: project.intro,
      description: project.description,
      technologies: project.technologies.join(', '),
      liveLink: project.liveLink || '',
      githubLink: project.githubLink || '',
      videoUrl: project.videoUrl || '',
      image: project.image || ''
    });
    setEditMode(true);
    setEditId(project._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this project?')) {
      const token = localStorage.getItem('token');
      try {
        await axios.delete(
          `http://localhost:5000/api/projects/${id}`,
          { headers: { 'x-auth-token': token } }
        );
        fetchProjects();
        alert('Project deleted!');
      } catch (err) {
        alert('Error deleting project');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
      
      <div style={styles.formSection}>
        <h2>{editMode ? 'Edit Project' : 'Add New Project'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Project Title *"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Short Intro (1-2 lines) *"
            value={formData.intro}
            onChange={(e) => setFormData({...formData, intro: e.target.value})}
            required
            style={styles.textarea}
          />
          <textarea
            placeholder="Full Description *"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows="5"
            required
            style={styles.textarea}
          />
          <input
            type="text"
            placeholder="Technologies (React, Node.js, MongoDB)"
            value={formData.technologies}
            onChange={(e) => setFormData({...formData, technologies: e.target.value})}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Live Demo Link (https://...)"
            value={formData.liveLink}
            onChange={(e) => setFormData({...formData, liveLink: e.target.value})}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="GitHub Link (https://...)"
            value={formData.githubLink}
            onChange={(e) => setFormData({...formData, githubLink: e.target.value})}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Video URL (YouTube/Vimeo)"
            value={formData.videoUrl}
            onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Image URL (https://...)"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            style={styles.input}
          />
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>
              {editMode ? 'Update Project' : 'Add Project'}
            </button>
            {editMode && (
              <button 
                type="button" 
                style={styles.cancelBtn}
                onClick={() => {
                  setEditMode(false);
                  setEditId(null);
                  setFormData({
                    title: '', intro: '', description: '', technologies: '',
                    liveLink: '', githubLink: '', videoUrl: '', image: ''
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div style={styles.projectsList}>
        <h2>All Projects ({projects.length})</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Add your first project above!</p>
        ) : (
          projects.map(project => (
            <div key={project._id} style={styles.projectItem}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.intro}</p>
              </div>
              <div style={styles.actions}>
                <button onClick={() => handleEdit(project)} style={styles.editBtn}>
                  Edit
                </button>
                <button onClick={() => handleDelete(project._id)} style={styles.deleteBtn}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  logoutBtn: {
    padding: '0.5rem 1rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  formSection: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.8rem',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem'
  },
  textarea: {
    padding: '0.8rem',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem'
  },
  submitBtn: {
    padding: '0.8rem 2rem',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  cancelBtn: {
    padding: '0.8rem 2rem',
    background: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  projectsList: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  projectItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '1rem'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem'
  },
  editBtn: {
    padding: '0.5rem 1rem',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  deleteBtn: {
    padding: '0.5rem 1rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;