import React from 'react';
import SystemsOrchestrator from "../../common/components/systems/systems-orchestrator/SystemsOrchestrator";

const SystemDetail = () =>
      <SystemsOrchestrator>
        {
          ({getProductById}) => {
            const systemDetail = getProductById(1000010000)

            return (
              <div className='container-fluid'>
                <h1 className="display-1">System {systemDetail.id}</h1>
                <dl className="row">
                  <dt className="col-sm-3">biosversion</dt>
                  <dd className="col-sm-9">{systemDetail.biosversion}</dd>

                  <dt className="col-sm-3">Kernel</dt>
                  <dd className="col-sm-9">{systemDetail.kernel}</dd>

                  <dt className="col-sm-3">zmqversion</dt>
                  <dd className="col-sm-9">{systemDetail.zmqversion}</dd>

                  <dt className="col-sm-3">kernelrelease</dt>
                  <dd className="col-sm-9">{systemDetail.kernelrelease}</dd>

                  <dt className="col-sm-3">cpu_model</dt>
                  <dd className="col-sm-9">{systemDetail.cpu_model}</dd>


                  <dt className="col-sm-3">pythonpath</dt>
                  <dd className="col-sm-9">
                    {
                      systemDetail.pythonpath.map((python, position) => <p key={position}>{python}</p>)
                    }
                  </dd>

                  <dt className="col-sm-3">saltversioninfo</dt>
                  <dd className="col-sm-9">
                    {
                      systemDetail.saltversioninfo.map((salt, position) => <p key={position}>{salt}</p>)
                    }
                  </dd>

                  <dt className="col-sm-3">ipv4</dt>
                  <dd className="col-sm-9">
                    {
                      systemDetail.ipv4.map((ip, position) => <p key={position}>{ip}</p>)
                    }
                  </dd>

                  <dt className="col-sm-3">ipv6</dt>
                  <dd className="col-sm-9">
                    {
                      systemDetail.ipv6.map((ip, position) => <p key={position}>{ip}</p>)
                    }
                  </dd>
                </dl>
              </div>
            )
          }
        }
      </SystemsOrchestrator>

export default SystemDetail;
